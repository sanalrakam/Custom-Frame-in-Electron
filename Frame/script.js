
const {remote}=require('electron')


var win=remote.getCurrentWindow();

function closeWindow(){
  win.close();
}

function minWindow(){

win.minimize();

}

function maxWindow(){
  win.isMaximized()?win.unmaximize():win.maximize()
}
