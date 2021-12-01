// Main variables

let theInput = document.querySelector('.get-repos input');
let getButton = document.querySelector('.get-button');
let reposData = document.querySelector('.show-data');


getButton.onclick = () => {
	getRepos();
};

// Get Reposs Function
function getRepos() {
	// If value is empty
	if(theInput.value == '') {

		reposData.innerHTML = `<span>Please Write Github UserName.</span>`;
	
	} else {
		
    fetch(`https://api.github.com/users/${theInput.value}/repos`)

	    .then((response) => {

	    	return response.json();

	    })

	    .then((repositories) => {

	    	// Empty The Container
	    	reposData.innerHTML = '';


	    	repositories.forEach(repo => {

	    		// Create The Main div Element
	    		let mainDiv = document.createElement('div');
	    		// Create Repo Name Text
	    		let respoName = document.createTextNode(repo.name);
	    		// Append The Text To main div
	    		mainDiv.appendChild(respoName);

	 			// Create Repo Url Anchor
	 			let theUrl = document.createElement('a');
	 			// Create Repo Url Text
	 			let theUrlText = document.createTextNode('visit');
	 			//Append The Repo Url Text To Anchor tag
	 			theUrl.appendChild(theUrlText);
	 			// Add The HyperText Reference 
		        theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
		        // Set Attribute Blank
		        theUrl.setAttribute('target', '_blank');
		        // Append Url Anchor To Main Div
		        mainDiv.appendChild(theUrl);



		        // Create Stars Count Span
		        let starsSpan = document.createElement("span");

		        // Create The Stars Count Text
		        let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

		        // Add Stars Count Text To Stars Span
		        starsSpan.appendChild(starsText);

		        // Append Stars Count Span To Main Div
		        mainDiv.appendChild(starsSpan);

		        // Add Class On Main Div
		        mainDiv.className = 'repo-box';


	    		// Append The Main Div To container
	    		reposData.appendChild(mainDiv);




	    	})
	    });
	}

}
