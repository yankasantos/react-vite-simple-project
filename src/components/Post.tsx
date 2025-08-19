const names = ['Yanka Santos', 'Renato Lelis']
const description =['Staff Software Engineer', 'Senior Python Software Engineer']
function Post(){
    const choosenName = Math.random() > 0.5 ? names[0] : names[1];
    const choosenDescription = choosenName === names[0] ? description[0] : description[1]
    return(
        <div>
            <h1>Name: {choosenName}</h1>
            <p>{choosenDescription}</p>
        </div>
    );
}

export default Post;