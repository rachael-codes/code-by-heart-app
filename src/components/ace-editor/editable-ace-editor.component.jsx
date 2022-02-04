import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';
import "ace-builds/src-noconflict/theme-github";

const EditableAceEditor = ({ language, code, placeholderText, height, 
                              width, updateCode, showLineNums }) => {
  // set language mode 
  const specialCases = {
    "nodejs" : "javascript",
    "cpp" : "c_cpp",
    "c" : "c_cpp",
    "objc" : "objectivec",
    "plain text" : null
  }
  const mode = (language in specialCases) ? specialCases[language] : language;

  // set tab size 
  const fourSpaceLangs = ["python", "rust", "swift", "kotlin", "java", "csharp"];
  const tabSize = (fourSpaceLangs.includes(language)) ? 4 : 2;

  return (
    <AceEditor 
    className = "editable-editor"
    style={{
      height: height,
      width: width,            
      }}
    theme='github'
    name='basic-code-editor' 
    placeholder={placeholderText}
    tabSize={tabSize}
    value={code}
    mode={mode}
    onChange={(event) => updateCode(event)}
    fontSize={12}
    showPrintMargin={false}
    showGutter={showLineNums}
    highlightActiveLine={false}
    setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: showLineNums,
        readOnly: false,
        cursorStyle: "slim"
    }}              
  />)
}

export default EditableAceEditor;