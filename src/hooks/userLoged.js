import { useEffect, useState } from 'react';

export function UserLoged() {
	const [isLoged, setUserLoged] = useState(false);
	useEffect(() => {
		function handleStatusUserChange() {
			setUserLoged(!isLoged);
		}
	});

	return isLoged;
}
