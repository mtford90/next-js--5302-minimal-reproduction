/* With CSS Modules */
import css from "../style.scss"
import Link from "next/link";
export default () => (
    <div className={css.example}>
        <p className={css.exampleDescription}>Hello World, I am being styled using <strong>Typed</strong> CSS Modules!</p>
        <Link href="/page2" passHref={true}><a>Page!</a></Link>
    </div>
)
