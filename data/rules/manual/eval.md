---
description: "Guidelines for eval"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Programming","Evaluation","Error Handling","Expressions","FreeMat"]
__meta__rate: 7
---

 Usage

The eval function evaluates a string. The general syntax for
its use is

     eval(s)

where s is the string to evaluate. If s is an expression
(instead of a set of statements), you can assign the output
of the eval call to one or more variables, via

     x = eval(s)
     [x,y,z] = eval(s)

Another form of eval allows you to specify an expression or
set of statements to execute if an error occurs. In this
form, the syntax for eval is

     eval(try_clause,catch_clause),

or with return values,

     x = eval(try_clause,catch_clause)
     [x,y,z] = eval(try_clause,catch_clause)

These later forms are useful for specifying defaults. Note
that both the try_clause and catch_clause must be
expressions, as the equivalent code is

    try
      [x,y,z] = try_clause
    catch
      [x,y,z] = catch_clause
    end

so that the assignment must make sense in both cases.


 Example

Here are some examples of eval being used.

  --> eval('a = 32')

  a =
   32

  --> b = eval('a')

  b =
   32

The primary use of the eval statement is to enable
construction of expressions at run time.

  --> s = ['b = a' ' + 2']

  s =
  b = a + 2
  --> eval(s)

  b =
   34

Here we demonstrate the use of the catch-clause to provide a
default value

  --> a = 32

  a =
   32

  --> b = eval('a','1')

  b =
   32

  --> b = eval('z','a+1')

  b =
   33

Note that in the second case, b takes the value of 33,
indicating that the evaluation of the first expression
failed (because z is not defined).

* FreeMat_Documentation
* FreeMat_Functions
* Generated on Thu Jul 25 2013 17:17:14 for FreeMat by
  doxygen_ 1.8.1.1

