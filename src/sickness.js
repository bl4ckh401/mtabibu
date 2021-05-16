function Sickness(props){
    const h3 = {
        textAlign:'center'
    }
    return(
        <div className='symptoms'>
           <h3 style={h3}>{props.name}:</h3>
            <h4>{props.signs}</h4>
        </div>
    );
}
export default Sickness;