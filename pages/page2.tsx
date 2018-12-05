
/* With CSS Modules */
import css from "../style.scss"
import palette from '../palette.scss'

export default () => (
    <div className={css.example}>
        <p className={css.exampleDescription}><strong>Another</strong> page!</p>
        <div style={{color: palette.whatsapp}}>Hello</div>
    </div>
)
