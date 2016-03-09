import Home from './login'
import Profil from './profil'
export default routes = {
    getProfileRoute() {
        return {
            // Return a React component class for the scene. It receives a prop
            // called `navigator` that you can use to push on more routes.
            getSceneClass() {
                return Profil;
            },

            // When this scene receives focus, you can run some code. We're just
            // proxying the `didfocus` event that Navigator emits, so refer to
            // Navigator's source code for the semantics.
            onDidFocus(event) {
            },

            // Return a string to display in the title section of the navigation bar.
            // This route's title is displayed next to the back button when you push
            // a new route on top of this one.
            getTitle() {
                return 'Stats';
            }
        };
    }
};