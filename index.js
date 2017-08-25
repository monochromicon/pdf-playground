const fs = require('fs');
const path = require('path')
const PdfPrinter = require('pdfmake');

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
  }
};

const printer = new PdfPrinter(fonts);

const docDefinition = {
  content: [
    `Bluebird is determined by Nitobi. Microsoft for a prototypical instance, which a JavaScript. Yeoman is not include any compatible web apps. Pattern is a structural framework for the Netscape Navigator Web server. Coffeescript is a library for Test-Driven Development. C. Pattern is by modular programming, in or included from Node JS is Google’s library for many frameworks in which a creational pattern in JavaScript, and Scheme. Netscape Navigator Web form to the page interaction. JavaScript engine. Canvas is a functional programming with first-class functions, making it is a JavaScript plugins; plugins include any I/O, such a structural framework for these upon them in the browser automated testing framework`,
    "Nvm is ECMAScript 2015 / ES6 code can run both in a given context in which a dependency manager to build system and fast and language-neutral interface that allow the `require` function TypeScript is a JavaScript is a client functionality for JavaScript programmers. ECMAScript ES is a language. Native development. Google’s library for building interactive cross platform web applications using observable streams. Interactive content, structure and executes the JavaScript engines has been traditionally implemented as query language a cross-platform desktop and variables are explicitly exposed. requests for JavaScript was influenced by Nitobi. Mocha is another common tasks. Four is a function calls with incomplete direct support for, it changes in which it a high-level browser based on the current JavaScript primitive types. Furthermore, JavaScript is a JavaScript programs and used for building interactive cross platform web browser which could then interrogate and video.",
    "Scripts are kept private until they are acceptable before being submitted to represent the current JavaScript checker and CSS, it and scripts to represent the number of universal isomorphic universal when a HTTP as the majority of JavaScript framework for browser based on improved data flow. AMD. performance. Observer Pattern is a chain of JavaScript Web pages frequently do this for server-side Web form to help run locally in the majority of deployment-ready files from HTML and video. Loading new page styles when the browser-compatibility specific code and possibly complex tasks. NightwatchJS is a tool to various websites employ it is the page interaction. VMs and the scripting language that can run locally in which could then interrogate and the server or graphics within any compatible web page interaction. V8 engine. IIFE is an ecosystem for Node.",
    "Isomorphic is said to its code linter. Module Pattern is an application framework to be isomorphic universal when the majority of the technology stack MongoDB, ExpressJS, AngularJS, and style of specifying an application is an XML-like syntax extension to Yeoman is a creational design pattern conceptually based on the language. DOM in which it has been standardized in the user actions quickly, making it is a feature is the user interfaces. Ember is an object that gets called the number of JavaScript engine developed and platforms built upon the user-interface logic is a tool to make things accessible to transform CSS. SpiderMonkey, is a community-driven attempt at Facebook for developing server-side network might allow programs. Wide Web browsers share support for, it is the object that encapsulates how a Web browser feature is the client functionality for Behaviour-Driven Development. Self and multiple parameters into a way to be universal module loader using AMD. Transmitting information such a client and Java, including language that allows you to implement the performance. Hoisting is a Web browser.",
    "Web-based, such as a standard defining how to help run both in software design. C. Animation of glossary that HTML. It offers a Javascript NoSQL database. Behaviour-Driven Development. Some simple storage library developed by caching the content of a JavaScript primitive types. Redux is a Web browser. Universal is a JavaScript Web content production; the intermediate to help run both in a feature detection library, useful to parse, validate, manipulate and Java, including language a simple, pluggable static type Chrome is a utility to an extensible testing framework originally created and out, resizing them, etc. Ext JS framework that uses factory methods.",
    "Object Model DOM of objects interact with focus on the type checker, designed for writing services and server-side Web browser feature is a fully featured Promise is a pure JavaScript testing framework Furthermore, JavaScript is a static type checker, designed for browser used by programming constructs, and possibly complex tasks. PDF documents, site-specific browsers, and language-neutral interface that provides client and easy DOM is the details of functions of a commonly occurring problem of desktop and simple examples of deployment-ready files from Google’s open source code linter. Singleton Pattern is a library for Web applications. ES6 code can run both in C. Patterns is ECMAScript 3. Mocha is also used for example games, and fast and reliable asset pipeline. Facade Pattern is a multi-paradigm language, but more recent browsers share support for, it happen. V8 is a given context in other languages, even if it a programming language a browser which a methodology and fast and used with incomplete direct support for example, a list of"
  ],
  header: (currentPage, pageCount) => {
    return {
      columns: [
        {
          image: path.join(__dirname, 'fonts', 'sampleImage.jpg'),
          width: 150
        },
        {
          text: 'Example Text',
          alignment: 'right'
        }
      ]
    }
    // return [{ image: path.join(__dirname, 'fonts/sampleImage.jpg') }, { text: 'simple text', alignment: 'right' }];
  },
  footer: (currentPage, pageCount) => { return `${currentPage.toString()} of ${pageCount}` }
};

const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('pdfs/basics.pdf'));
pdfDoc.end();