export default function getBaseUrl(){
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'https://private-c3edb-postsmock.apiary-mock.com' : '/';
}