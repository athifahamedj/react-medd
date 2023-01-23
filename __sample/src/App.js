import './App.css';
import Header from "./component/Header";

 const meta = {
    title: 'Some Meta Title',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'http://example.com/path/to/page',
    content:'width-device-width, initial-scale=1.0',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
  }
function App() {
 
  return (
    <div className="App">
      <DocumentMeta {...meta} />
     <Header />
    </div>
  );
}

export default App;
