function Header({headerInfo, cname, children}){
    return(
        <div>
        <h1>Welcome to header section</h1>
        {children}
        <h2>{headerInfo.title}</h2>
        <h3>{cname}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ad explicabo numquam officiis temporibus. Exercitationem excepturi temporibus quas ratione optio ab pariatur, velit fugit aspernatur distinctio omnis error eos laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint totam sapiente magni neque natus laboriosam et? Quam reprehenderit voluptatem repellendus iusto voluptates eaque, eveniet maxime dolorum voluptatibus voluptatum aut!</p>
        </div>
            );
}

export {Header};