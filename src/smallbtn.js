function Elements(props){
    return(
        <div>
            <li className='hd-items'>
                {props.icon}{props.name}
            </li>
        </div>
    );
}
export default Elements;