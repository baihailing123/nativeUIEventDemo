//功能：React Native 和原生UI组件事件交互。

// Demo1:React Native 传属性给原生，调用原生图片View，点击图片，并把信息传给JS进行显示。
//见博客地址：https://blog.csdn.net/baihailing/article/details/86534104

// Demo2:实现原生button 的点击事件传递，是在该篇文章上进行修改的：https://blog.csdn.net/chelongfei/article/       details/80604578。
//见博客地址：https://blog.csdn.net/baihailing/article/details/86544598


运行方式：
1.目录下进行 npm install;
2. npm start


在运行Demo2时，
在App.js 文件：
注释： import ReactView from  "./reactView"，
<ReactView style={styles.imageViewStyle} propertyArr = {["two","nomal"]} ></ReactView>

打开：import CLFButton from "./CLFButton"
 <CLFButton style={styles.datePickerView} normalTitle={"正常模式"} selectedTitle={"按下模式"}></CLFButton>

        
