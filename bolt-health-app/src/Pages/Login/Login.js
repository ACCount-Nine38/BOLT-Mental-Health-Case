import '../../Elements/Button/button.css';
import './Login.css'

function Login () {
    return (
        <>
            <div className='loginBack'>
                <div className='fakeFieldBox'>  
                    <input type="username" placeholder="Username" className='fakeInputs' /> <br />
                    <input type="password" placeholder="Password" className='fakeInputs' />
                </div>
                <a href='missions' className='ButtonPrimary login'>Login</a>
            </div>
        </>
    );
};

export default Login;