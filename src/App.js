import React from 'react';
import {Header} from './components/Header';
import './styles/styles.scss';
import MessageList from './components/MessageList';




class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: [{ id: "1", name: "Nir", pic: "https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7_400x400.jpg", date: "23/1/2012    18:23", text: "תוכנית מעווללללהההה!!!!!! איזה תוכנית מעולללללללההה!!" }, { id: "2",  name: "Nir", pic: "https://ci5.googleusercontent.com/proxy/3rmB1h9CCUCRiGBoBSAf6aEND_PJvXNZMtmB3cYqr1hwV9gpJtYykEAVMVhIhrD7KlDw8SK5sQ4ysRiEoYINYmIdv85q6nOVKiD13g=s0-d-e1-ft#http://www.slash.co.il/assets/logos/logo_slash_200x81.jpg", date: "23/1/2012    18:24", text: "תוכנית מעווללללהההה!!!!!! איזה תוכנית מעולללללללההה!!" }, 
            { id: "3",name: "Gal", pic: "https://ci5.googleusercontent.com/proxy/3rmB1h9CCUCRiGBoBSAf6aEND_PJvXNZMtmB3cYqr1hwV9gpJtYykEAVMVhIhrD7KlDw8SK5sQ4ysRiEoYINYmIdv85q6nOVKiD13g=s0-d-e1-ft#http://www.slash.co.il/assets/logos/logo_slash_200x81.jpg", date: "23/1/2012    18:25", text: "תוכנית מעווללללהההה!!!!!! איזה תוכנית מעולללללללההה!!" },
            { id: "4",name: "Ron", pic: "https://ci5.googleusercontent.com/proxy/3rmB1h9CCUCRiGBoBSAf6aEND_PJvXNZMtmB3cYqr1hwV9gpJtYykEAVMVhIhrD7KlDw8SK5sQ4ysRiEoYINYmIdv85q6nOVKiD13g=s0-d-e1-ft#http://www.slash.co.il/assets/logos/logo_slash_200x81.jpg", date: "23/1/2012    18:23", text: "תוכנית מעווללללהההה!!!!!! איזה תוכנית מעולללללללההה!!"}, { id: "5",name: "Nir", pic: "https://ci5.googleusercontent.com/proxy/3rmB1h9CCUCRiGBoBSAf6aEND_PJvXNZMtmB3cYqr1hwV9gpJtYykEAVMVhIhrD7KlDw8SK5sQ4ysRiEoYINYmIdv85q6nOVKiD13g=s0-d-e1-ft#http://www.slash.co.il/assets/logos/logo_slash_200x81.jpg", date: "23/1/2012    18:23", text: "תוכנית מעווללללהההה!!!!!! איזה תוכנית מעולללללללההה!!" },
             { id: "6", name: "Nir", pic: "https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7_400x400.jpg", date: "23/1/2012    18:26", text: "תוכנית מעווללללהההה!!!!!! איזה תוכנית מעולללללללההה!!" },
            { id: "7", name: "Yuval", pic: "https://ci5.googleusercontent.com/proxy/3rmB1h9CCUCRiGBoBSAf6aEND_PJvXNZMtmB3cYqr1hwV9gpJtYykEAVMVhIhrD7KlDw8SK5sQ4ysRiEoYINYmIdv85q6nOVKiD13g=s0-d-e1-ft#http://www.slash.co.il/assets/logos/logo_slash_200x81.jpg", date: "23/1/2012    18:27", text: "תוכנית מעווללללהההה!!!!!! איזה תוכנית מעולללללללההה!!" }, { id: "8", name: "Nir", pic: "https://ci5.googleusercontent.com/proxy/3rmB1h9CCUCRiGBoBSAf6aEND_PJvXNZMtmB3cYqr1hwV9gpJtYykEAVMVhIhrD7KlDw8SK5sQ4ysRiEoYINYmIdv85q6nOVKiD13g=s0-d-e1-ft#http://www.slash.co.il/assets/logos/logo_slash_200x81.jpg", date: "23/1/2012    18:28", text: "תוכנית מעווללללהההה!!!!!! איזה תוכנית מעולללללללההה!!" }, 
            { id: "9", name: "Nir", pic: "https://ci5.googleusercontent.com/proxy/3rmB1h9CCUCRiGBoBSAf6aEND_PJvXNZMtmB3cYqr1hwV9gpJtYykEAVMVhIhrD7KlDw8SK5sQ4ysRiEoYINYmIdv85q6nOVKiD13g=s0-d-e1-ft#http://www.slash.co.il/assets/logos/logo_slash_200x81.jpg", date: "23/1/2012    18:29", text: "תוכנית מעווללללהההה!!!!!! איזה תוכנית מעולללללללההה!!" },
            { id: "10", name: "Nir", pic: "https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7_400x400.jpg", date: "23/1/2012    18:29", text: "תוכנית מעווללללהההה!!!!!! איזה תוכנית מעולללללללההה!!" }],
            currentlyDisplayed: [],
            lastIndex: 0,
        };
        this.loopMessages = this.loopMessages.bind(this);
    };

    componentWillMount() {
        const messages = this.state.messages;
        let currentlyDisplayed = [];
        for(let i = 0; i < 3; ++i ){
          currentlyDisplayed.unshift(messages[i]);
        }
        this.setState({currentlyDisplayed});
      
      } 
    
      componentDidMount(){
        setInterval(this.loopMessages, 5000);
      }
    
      componentWillUnmount(){
        clearInterval(this.loopMessages());
      }
      
      loopMessages(){

        let messages = this.state.messages;
        let lastIndex = this.state.lastIndex;
        let currentlyDisplayed = this.state.currentlyDisplayed;
    
        currentlyDisplayed.pop();
        currentlyDisplayed.unshift(messages[(lastIndex + 1) % messages.length]);
        lastIndex +=1;
        this.setState({currentlyDisplayed, lastIndex});
       }
      

    render() {

        return (
            <div >
            <Header/>
              
                   <MessageList data={this.state.currentlyDisplayed} />
              
            </div>
        )
    };

};



export default App;





 







