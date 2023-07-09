export default function BookList() {
   let pageTitle = "Upcoming Books";
   let book1 = "https://books.google.com/books/publisher/content?id=8bWYEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71jcNhEFIEWs6_rIKsb01Vd8o6fq2JYzBUf6qjphs_cpsOS0KJJy5B-gVVTYdS6GSbIR9cpEGJI7afF3WFSl7spKA8rlxjaKuB5alp5L5VJXlypv03d8U5KfxzFxCpoVRnM9qF-";
   let book2 = "https://books.google.com/books/publisher/content?id=2x2IEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72tc3M7dn63wf3T26i1qkvd-2Q7KfSgx7o1dt-K9Tc9c4TL1ZToLIvJ2By_gnS97yh5Lw67d2COeyVGmJPBlvhqjisQDbOgPnQSVVzxz5P95r9C6voKt9I_mFDVbLCH5wOsKmp5";
   let book3 = "https://books.google.com/books/publisher/content?id=1MKYEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71mSi6lKE9Dk3WWL8o_gpKALCmk2-i16SaQTzH49Gglu7qLgar1uyuDSTsUduD21UQC3Q2jyjKQWdrdpXpmjZkQpJBNncNbhTBd4X0EQy3-E3rkLoGL2lnq-I-Sb5uBvH4XPHpE";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Hello Stranger: A Novel by Katherine Center novel cover" />
         <img src={book2} alt="None of This by Lisa Jewel is True novel cover" />
         <img src={book3} alt="Family Lore by Elizabeth Acevedo novel cover" />
      </div>      
   );
}