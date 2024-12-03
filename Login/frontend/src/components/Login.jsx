import '../App.css'
import {Box} from '@mui/material'
import TextField_Outline from './Forms/text_fields/TextField_Outline'
import PassField_Outline from './Forms/text_fields/PassField_Outline'
import LoginButton from './Forms/Buttons/LoginButton'
import CheckBox from './Forms/CheckBox/CheckBox'
import {Link} from 'react-router-dom'

const Login = () =>{
    return (
        <div className={"loginBackground"}> 
            <Box className={"loginBox"}>
                <Box className={"itemBox"}>
                    <Box className={"loginTitle"}>
                        Login
                    </Box>
                </Box>
                <Box className={"itemBox"}>
                    <TextField_Outline 
                        label={"Email ou Username"}
                    />
                </Box>
                <Box className={"itemBox"}>
                    <PassField_Outline
                        label={"Senha"}
                    />
                </Box>
                <Box className={"itemBox"}>
                    <CheckBox
                        label={"Lembre-se de mim"}
                    />
                </Box>
                <Box className={"itemBox"}>
                    <LoginButton
                        label={"Login"}
                    />
                </Box>
                <Box className={"itemBox"}>
                    Forgot Password
                </Box>
                <Box className={"itemBox"}>
                    <Link to="/register">
                        Sem conta? Registre-se!
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

export default Login