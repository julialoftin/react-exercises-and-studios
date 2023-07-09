import classes from './ChoresList.module.css'

export default function ChoresList () {
   return (
      <div>
         <h3 className={classes.choresHeading}>Chores</h3>
         <ol>
            <li className={classes.choresText}>Walk the dog</li>
            <li className={classes.choresText}>Change litter boxes</li>
            <li className={classes.choresText}>Vacuum</li>
            <li className={classes.choresText}>Start laundry</li>
         </ol>
      </div>
   );
}