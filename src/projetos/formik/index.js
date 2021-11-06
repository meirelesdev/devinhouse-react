import { AppTheme } from "./src/contexts/app-theme-context"
import FormikRoutes from "./src/routes/Routes"
import { GlobalStyles } from './src/styles/GlobalStyles'

const App = props => (
    <AppTheme>
        <GlobalStyles/>
        <FormikRoutes />
    </AppTheme>
)


export default App