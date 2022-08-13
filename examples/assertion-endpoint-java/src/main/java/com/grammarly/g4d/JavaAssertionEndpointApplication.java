package com.grammarly.g4d;

import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSSigner;
import com.nimbusds.jose.crypto.RSASSASigner;
import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.util.IOUtils;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.text.ParseException;
import java.util.Date;
import java.util.Map;

@SpringBootApplication
@RestController
public class JavaAssertionEndpointApplication {

    public static void main(String[] args) {
        SpringApplication.run(JavaAssertionEndpointApplication.class, args);
    }

    private JWSSigner signer;
    private JWK key;

    @PostConstruct
    public void initializeSigningKey() throws ParseException, JOSEException, IOException {
        InputStream inStream = new FileInputStream("./private.jwk");
        String fileContents = IOUtils.readInputStreamToString(inStream, StandardCharsets.UTF_8);
        key = JWK.parse(fileContents);
        signer = new RSASSASigner(key.toRSAKey());
    }

    @CrossOrigin(allowCredentials = "true", originPatterns = {"*"})
    @GetMapping("/assertion")
    public Map<String, String> createAssertion(@RequestParam(value = "clientId") String clientId) throws JOSEException {
        Date now = new Date();
        JWTClaimsSet claims = new JWTClaimsSet.Builder()
                .subject(clientId)
                .audience("https://tokens.grammarly.com/oauth2/token")
                .issuer(clientId)
                .issueTime(now) // You may want to backdate this by a few seconds. If so, adjust the expiration time too
                .expirationTime(new Date(now.getTime() + 5 * 60 * 1000)) // validity window of 5 minutes in milliseconds
                .build();

        SignedJWT signedJwt = new SignedJWT(
                new JWSHeader.Builder(JWSAlgorithm.RS256)
                        .keyID(key.getKeyID())
                        .customParam("ver", "v1") // custom parameter required by Grammarly
                        .build(),
                claims
        );

        signedJwt.sign(signer);
        return Map.of("assertion", signedJwt.serialize());
    }
}
