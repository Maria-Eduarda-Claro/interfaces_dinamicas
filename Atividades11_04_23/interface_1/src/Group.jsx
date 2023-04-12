import estilo from './Group.module.css'


function Group(){
    return(
        <div className={estilo.grupo}>
            <div className={estilo.box1}>1</div>
            <div className={estilo.box1}>2</div>
            <div className={estilo.box1}>3</div>
            <div className={estilo.box1}>4</div>
        </div>
        

    )
}
export default Group;