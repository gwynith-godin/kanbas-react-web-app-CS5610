export default function BlockInilneElements(){

    return(
        <div>
            <h1 
style={{backgroundColor: "yellow",}}>
  Block vs inline elements
  </h1>
<p style={{
  backgroundColor: "blue",
  color: "white",
  padding: "10px",
  marginTop: "50px"}}>
  Headings and paragraphs are
  block elements. Width is parent's
  width</p>
Normal text renders inline
<br/><br/>
<span style={{
  backgroundColor: "red",
  color: "white", 
  borderStyle: "solid",
  borderTopWidth: "10px",
  borderLeftWidth: "5px",
  borderBottomWidth: "20px",
  borderRightWidth: "15px",
  borderLeftColor: "green",
  borderRightColor: "blue",
  borderTopColor: "yellow",
  borderBottomColor: "red",
  }}>Span elements</span>
  <span style={{
  backgroundColor: "red",
  color: "white",}}> render inline</span> 
  with the rest of the content
  <br /><br /><br />
</div>
    );
}