router.use('/', (req, res, next) => {
   models.Users.getLetterCounts().then(countArr => {
       res.locals.letterCounts = countArr;
   }).then(() => next());
})