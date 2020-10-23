function M(){ //function component. props-gui
    return <h1>swvwev</h1>;
}
function M1(props){ //function component. props-toi
return <h1>{props.ner}</h1>;
}
function Mend2(props){ //function component. props-toi olon html renderlen
    return(
        <div>
            <h1>{props.ner}</h1>
            <p>{props.nas}</p>
            <p>{props.surchBgaEseh ? "unen": "choloo awsan"}</p>
            <p>{props.dunguud[0]}</p>
            <p>{props.dunguud[1]}</p>
            <p>{props.dunguud[2]}</p>
            {props.dunguud.map(
                ( el, index)=>
                    <p key={index}></p>
            )
            }
            <p>{props.myObj.mergejil}</p>
            <p>{props.myObj.index}</p>
        </div>
    );
}
function EtsegComp(props){
    return(
        <div>
            <M/>
            <M1 ner={props.ner}/>
            <Mend2 ner={props.ner} age={props.age}/>
            <table>
                <tr><td>{props.angi[0]}</td></tr> 
                <tr><td>{props.angi[1]}</td></tr> 
                <tr><td> {props.angi[2]}</td></tr> 
            </table>
        </div>
    )
}
ReactDOM.render(
    //<h1> Hello </h1>,
    // <M/>,
    // <M1 ner="hello bat"/>,
    <Mend2 ner="dorj" age="12"surchBgaEseh={true}
    dunguud= {[80, "dalan yos", true]}
    myObj={ { mergejil:'sw', index:'DS2015077' } }/>,
    //<EtsegComp ner="jems" age="20" angi={['пх','мс','нббмс']}/>,
    document.getElementById('root')
    );
Aa