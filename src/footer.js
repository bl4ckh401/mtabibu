import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
function Footer(){
    return( 
        <div>
            <AppBar position='static' color='primary'>
                <Container maxWidth='md'>
                    <Toolbar>
                                <Typography variant='body2' color='inherit'>
                                        2021 m-tabibu
                                </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
export default Footer;