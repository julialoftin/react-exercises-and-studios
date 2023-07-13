import React from 'react'
import styles from './Description.module.css'

export default function RecipeAuthor() {
    let authorLink = 'https://www.favfamilyrecipes.com/author/emily/';
    let authorPhoto = 'https://secure.gravatar.com/avatar/00d13ac180f86508a33c64a05064eada?s=400&d=mm&r=g';
    let authorName = 'Emily Walker';
  return (
    <div className= {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt="Headshot of Emily Walker" className={styles.imageUpdates} />
        <div>
            <h3>{authorName}</h3>
            <a href={authorLink} target='blank'>Favorite Family Recipes</a>
        </div>
    </div>
  )
}
