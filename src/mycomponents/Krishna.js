function Viji()
{
    return(
        <>
        <h1>This is Krizh Component</h1>
        </>
    )
}
 function Krishna()
{
    return(
        <>
        <Viji/>
        <h1>This is user defined functional components</h1>
        <input type="text" placeholder="Enter your name" value="viji">
        </input>
        <input type="button" value="ClickMe"></input>
        
        </>
    )
}
export default Krishna