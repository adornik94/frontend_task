import './App.css';
import Button from '@mui/material/Button';
import {shades} from "./theme";
import { borderLeft } from '@mui/system';
import {useState} from "react";
import datajson from "./example.json";
import { blue } from '@mui/material/colors';
import { resolveComponentProps } from '@mui/base';
import {Box} from '@mui/material';


function App() {



const [comment,setComment] =useState("...type Something");

const [comments,setComments]= useState(datajson.data.comments);

const [reply,setReply] = useState(false);

const [replyComment,setReplyComment] = useState("");
const [valueId,setValueId] = useState();

const [replies,setReplies] = useState([ {id:0,
  author: {
    name: "Andjela Dornik",
    "picture": ""
  },
  text: "",
  timestamp: Date.now()

}]);
const [saved,setSaved] = useState(false);


const times = comments.map((e)=>{

  return new Date(e.timestamp).toLocaleTimeString("en-US");
})

console.log(new Date(Date.now()));


console.log(replies);

const onChangeHandler= (e)=>{

setComment(e.target.value);
}

const onClickHandler= ()=>{

 
 const  commentobj ={
    id: comments.length,
    author: {
      name: "Andjela Dornik",
      "picture": ""
    },
    text: comment,
    timestamp: Date.now()

  }

  setComments((comments)=>[...comments,commentobj]);

}

const onReplyClickHandler=(valueId)=>{

  setReply(true);
  setValueId(valueId);

}

const onChangeReply = (e)=>{

setReplyComment(e.target.value);

}



const onChangeReplyHandler = ()=>{

  const  commentobj ={
    id: valueId,
    author: {
      name: "Andjela Dornik",
      "picture": ""
    },
    text: replyComment,
    timestamp: Date.now()

  }

  setReplies((replies)=>[...replies,commentobj]);
  setSaved(true);
}



  return (
  <div className= "main">
 <div className="layout">
 

<div className='date'>
  <span style={{fontSize: "14px", fontFamily: "Open Sans",backgroundColor:"#eceef1"}}>Tuesday, 13.12.2020</span></div>
{comments.map((el,i)=>{

   return(
   <div className={ el.id==3?"commentwrapper":"commentwrapper_yes"} key={el.id+ "6"}>
       <div className='comment-container'>
      <div className={`dot dot${el.id}`}></div>
      <div className='comment'>
         <div id="author">{el.author.name}</div>
         <div id="author_text" style={{color:shades.grey[500]}}>{el.text}</div>
      </div>
      </div>
      <div className='date_reply'>
        <span style={{color:shades.grey[600], fontSize: "14px"}}>{times[i].toString().substring(0,5)}</span>
        <span style={{color: shades.blue[500]}}><Box id = {el.id} sx={{ cursor: 'pointer' }} backgroundColor ="#eceef1" onClick= {()=>onReplyClickHandler(el.id)}>{el.id==2?"Replay(1)":"Replay"}</Box></span>
       
      </div>
      <div className={reply && valueId==el.id?"replyComment_yes":"replyComment"}>
         <textarea className='area' style={{fontSize:"16x", color:shades.grey[700]}} value={replyComment}  
          onChange={onChangeReply}/>
         <button className='commentbtn'
          onClick= {onChangeReplyHandler}
          style={{ borderRadius:"5px" ,backgroundColor: shades.grey[300],
           marginRight: "0.5rem"}}>
          <span style={{fontWeight:"bold", backgroundColor:shades.grey[300],fontSize:"12px"}}>Reply</span></button>
      </div>
      <div className= {el.id==valueId && saved?"commentwrapper_yes":"commentwrapper_none"}>
            
                      {replies.map((e)=>{

                        return (
                          <div className= "replywrapper" key={e.id+"5"}>
                          <div  className= {e.id ==0?"nothing":"saved_reply"} >
                        <div className="dot"></div>
                      <div className='comment'>
                      <div id="author">{e.author.name}</div>
                      <div id="author_text" style={{color:shades.grey[500]}}>{e.text}</div>
                     
                      </div>
                      
                    </div>
                    <div className='date_reply'>
                    <span style={{color:shades.grey[600], fontSize: "14px"}}>{times[i].toString().substring(0,5)}</span>
        <span style={{color: shades.blue[500]}}><Box id = {el.id} sx={{ cursor: 'pointer' }} backgroundColor ="#eceef1" onClick= {()=>onReplyClickHandler(el.id)}>{el.id==2?"Replay(1)":"Replay"}</Box></span>
       
                     </div>
                   
                    </div>
                        )
                      })}
           
      </div>
      <div className={el.id==2?"reply reply_yes":"reply"}>
          <div className='comment-container'>
             <div className="dot dot3"></div>
             <div className='comment'>
                <div id="author">{comments[2].author.name}</div>
                <div id="author_text" style={{color:shades.grey[500]}}>{comments[2].text}</div>
             </div>
         </div>
          <div className='date_reply'>
             <span style={{color:shades.grey[600], fontSize: "14px"}}>{times[2].toString().substring(0,5)}</span>
             <span style={{color: shades.blue[500]}}>{"Reply"}</span>
          </div>
      </div>
   </div>
   )
})}

 <div className="main-container">
 
   <textarea className='area' style={{fontSize:"16x", color:shades.grey[700]}} value={comment}  
   onChange={onChangeHandler}/>
   <button className='commentbtn'
    
    onClick= {onClickHandler}
   style={{ borderRadius:"5px" ,backgroundColor: shades.grey[300],
        marginRight: "0.5rem"}}><span style={{fontWeight:"bold", backgroundColor:shades.grey[300],fontSize:"12px"}}>Send</span></button>
  </div>
 
 </div>
 </div>
  );
}

export default App;
