import { Button } from "react-bootstrap"
import * as styles from './submitButton.css'

const SubmitButton =  ({ children, loadingState, onClick }) => {
    return (
        <Button
            className = {styles.button}
            type={onClick ? "button" : "submit"}
            onClick = {onClick}
            disabled = {loadingState ? 1 : 0}
        >
            {children}
        </Button>
    )
}

export default SubmitButton;