import StateOne from "./state1"
const DayOne = () => {
    return (
        <>
            <h1>What is Virtual DOM</h1>
            <p>Virtual DOM is representation of JS DOM It is similar to real DOM but it cannot directly change the real dom. React maintains 2 virtual dom Whenever there a change in document, it compares previous state of virtual dom with the updated state of virtual dom and this comparision is called Diffing Algorithm. It sends the changes to real dom in the form of batch It makes react fast.(at the time of comparision, it translate the code) So this whole process is called reconcilation(comparision and applying the changes to real dom).</p>
            <h1>What is SPA</h1>
            <ul type="none">
                <li> Single Page Applications (SPA) are a great way to create a fantastic user experience on mobile devices.</li>
                <li>They consist of a single web page that loads all content using JavaScript. They request the markup and data independently and render pages straight to the browser.</li>
                <li> Reloading: Single-page applications are web pages that only require a single HTML page to load.</li>
                <li>They are generally used to perform actions that would take too long to load via traditional web pages, such as downloading files or rendering images.</li>
                <li>A single-page application comprises HTML and JavaScript, usually including a server-side language (such as PHP) that processes data and returns the results.</li>
            </ul>
            <h1>What is difference between class and functional component</h1>
            <table border={1}>
                <tr>
                    <th>Functional Components</th>
                    <th>Class Components </th>
                </tr>
                <tr>
                    <td>A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).</td>
                    <td>A class component requires you to extend from React. Component and create a render function which returns a React element.</td>
                </tr>
                <tr>
                    <td>There is no render method used in functional components.</td>
                    <td>It must have the render() method returning JSX (which is syntactically similar to HTML)</td>
                </tr>
                <tr>
                    <td>Functional component run from top to bottom and once the function is returned it cant be kept alive.</td>
                    <td>Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.</td>
                </tr>
                <tr>
                    <td>Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.</td>
                    <td>Also known as Stateful components because they implement logic and state.</td>
                </tr>
                <tr>
                    <td>React lifecycle methods (for example, componentDidMount) cannot be used in functional components.</td>
                    <td>React lifecycle methods can be used inside class components (for example, componentDidMount).</td>
                </tr>
                <tr>
                    <td>Hooks can be easily used in functional components to make them Stateful.
                        <br></br>
                        example: const [name,SetName]= React.useState(‘ ‘)
                    </td>
                    <td>It requires different syntax inside a class component to implement hooks.

                        {/* example: constructor(props) {

                            super(props);

                        this.state = {name: ‘ ‘}

                        } */}
                    </td>
                </tr>
                <tr>
                    <td>Constructors are not used.</td>
                    <td>Constructor are used as it needs to store state. </td>
                </tr>
            </table>
        <h1>What do you mean by state and its use in react?</h1>
        <p>States are variables which are used to manipulate data States are muttable Any changes in these variables force react to re-render the DOM and update the components</p>
        <StateOne/>
        <h1>What is JSX and why do we use it instead of js?</h1>
        <ul type="none">
            <li>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.</li>
            <li>JSX converts HTML tags into react elements.</li>
            <li>You are not required to use JSX, but JSX makes it easier to write React applications.</li>
            <li>JS XML It allows us to write HTML in react JSX is faster than js because it performs optimization of code while translating to regular js(by Babel). It is easier to manage and debug easily</li>
            <li>In JSX, we have to return one element all self closing tags should be closed we cannot use js reserved keywords (like class---className, for--HTMLfor)</li>
        </ul>
        <h1>What is package.json</h1>
        <p>It is the heart of any Node project. It records important metadata of the project All data is stored in a json format It contains all dependencies, and properties of project npm init--is used to create a package.json file</p>
        <p>there are inbult dependencies but we want any dependencies we want to install like this</p>
        <ul>
            <li> npm install react-router-dom   ----- For routing and link</li>
            <li>npm install @mui/icons-material ----- material icons</li>
        </ul>
        <a href="https://www.letsreact.org/package-json-explained/"> package.json</a>
        </>  

    )
}
export default DayOne