import react from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './layout.module.css'

const Layout = ({children}) =>{
    return (
        <div className = {styles.container}>
            <Navbar/>
            {children}
            <footer className = "footer">This is my footer</footer>

            <style jsx>
                {`
                    .footer {
                        background-color: blue;
                    }
                `}
            </style>
        </div>

    )
}


export default Layout;