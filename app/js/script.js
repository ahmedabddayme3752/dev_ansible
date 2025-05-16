// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements to update
    const serverNameElement = document.getElementById('server-name');
    const deployDateElement = document.getElementById('deploy-date');
    
    // Set server name (in a real scenario, this would be dynamically populated)
    serverNameElement.textContent = window.location.hostname || 'localhost';
    
    // Set deployment date to current date
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    deployDateElement.textContent = now.toLocaleDateString('fr-FR', options);
    
    // Log deployment information
    console.log('Application deployed successfully!');
    console.log('Server: ' + serverNameElement.textContent);
    console.log('Deployment time: ' + deployDateElement.textContent);
});
