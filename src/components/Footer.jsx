import { } from 'react'
import { Link } from 'react-router-dom';
import '../scss/_footer.scss';

function Footer() {
    return (
        <>
            <div class="container text-center footer">
                <div class="row">
                    <div class="col coluna">
                        <Link to="contato" className='footer-link'>Contato</Link>
                    </div>
                    <div class="col coluna">
                        <Link to="login" className='footer-link'>Login/Cadastro</Link>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}

export default Footer