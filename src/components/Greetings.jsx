function Greetings (props){
    const {lang,children} = props
    let saludo = "";
    if(lang === "de") saludo = "Hallo"
    if(lang === "en") saludo = "Hello"
    if(lang === "es") saludo = "Hola"
    if(lang === "fr") saludo = "Bonjour"

    return(
        <p>{saludo} {children}</p>
    )
}

export default Greetings;