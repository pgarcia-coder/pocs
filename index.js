const Diff = require('diff');

const chars = 'beeb boop';
const otherChars = 'beep boob blah';
const diffChar = Diff.diffChars('beeb boop', 'beep boob blah');

/*[
    { count: 3, value: 'bee' },
    { count: 1, added: undefined, removed: true, value: 'b' },
    { count: 1, added: true, removed: undefined, value: 'p' },
    { count: 4, value: ' boo' },
    { count: 1, added: undefined, removed: true, value: 'p' },
    { count: 6, added: true, removed: undefined, value: 'b blah' }
]*/

const diffWord = Diff.diffWords('beeb boop', 'beep boob blah');

/*[
    { count: 1, added: undefined, removed: true, value: 'beeb' },
    { count: 1, added: true, removed: undefined, value: 'beep' },
    { count: 1, value: ' ' },
    { count: 1, added: undefined, removed: true, value: 'boop' },
    { count: 3, added: true, removed: undefined, value: 'boob blah' }
]*/

const diffLine = Diff.diffLines('beeb boop', 'beeb boob');

/*[
    { count: 1, added: undefined, removed: true, value: 'beeb boop' },
    { count: 1, added: true, removed: undefined, value: 'beeb boob' }
]*/

const diffSentence = Diff.diffSentences('beeb boop.', 'beeb boop. Blah');

/*[
    { count: 1, value: 'beeb boop.' },
    { count: 1, added: true, removed: undefined, value: ' Blah' }
]*/

const diffArray = Diff.diffArrays(['beeb', 'boop'], ['beeb', 'boop', 'blah']);

/*[
    { count: 2, value: [ 'beeb', 'boop' ] },
    { count: 1, added: true, removed: undefined, value: [ 'blah' ] }
]*/

Diff.diffJson({ a: 'beeb', b: 'boob' }, { a: 'beeb', d: 'boop', c: 'blah' });

/*[
    { count: 2, value: '{\n  "a": "beeb",\n' },
    {
      count: 1,
      added: undefined,
      removed: true,
      value: '  "b": "boob"\n'
    },
    {
      count: 2,
      added: true,
      removed: undefined,
      value: '  "c": "blah",\n  "d": "boop"\n'
    },
    { count: 1, value: '}' }
]*/

Diff.createPatch('diff.txt', 'beeb boop', 'beep boob blah');

/*
Index: diff.txt
===================================================================
--- diff.txt
+++ diff.txt
@@ -1,1 +1,1 @@
-beeb boop
\ No newline at end of file
+beep boob blah
\ No newline at end of file
*/
