import {Avatar, Badge, Card, CardContent, CardHeader, IconButton, Typography} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from "@emotion/styled";
import {Email, LocationOn, Person, Phone} from "@mui/icons-material";

const Wrapper = styled.div`
  width: 400px;
  margin: 20px
`

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

export function CustomerInfo() {
    return <div
        className="CustomerInfo"
        style={{borderLeft: "1px solid rgba(0,0,0,0.05)", height: "100%"}}
    >
        <Card ariant="outlined" sx={{}}>
            <CardHeader
                avatar={
                    <Avatar alt="Remy Sharp" {...stringAvatar('Rahul Kadyan')} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title="Rahul Kadyan"
                subheader="Acme Co"
            />
            <CardContent>
                <Typography>
                    <Person/>Customer
                </Typography>
                <Typography>
                    <Badge/>User id 11111111111
                </Typography>
                <Typography>
                    <Phone/>Phone +33 000 0000 00
                </Typography>
                <Typography>
                    <LocationOn/>Email Paris, France
                </Typography>
                <Typography>
                    <Email/>Email rahul@istheking.com
                </Typography>
            </CardContent>
        </Card>
    </div>;
}
