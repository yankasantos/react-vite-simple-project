function Post(props){
    
    return(
        <div>
            <p>{props.author}</p>
            <span>{props.description}</span>
            <p>{props.message}</p>
        </div>
    );
}

export default Post;