import { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { app } from '../../Firebase/firebase';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	// const [isLogged, setIsLogged] = useState(false);
	let history = useHistory();
	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
