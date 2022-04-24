import { UserContext } from '../context/User/UserContext';
import { app } from './firebase';

export default function signUp({ email, password }) {
	console.log(email);
	const { issetIsLogged } = UserContext(UserContext);
	app
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			console.log('object');
			//setIsLogged(true);
		});
}

app;
// 		.auth()
// 		.createUserWithEmailAndPassword(email, password)
// 		.then((firebaseUser) => {
// 			setUsuario(firebaseUser);
// 		});
