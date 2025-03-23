---
description: "Guidelines for if"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Control Structures","Conditional Execution","Programming","MATLAB Compatibility","Flow Control"]
__meta__rate: 7
---

 Usage

The if and else statements form a control structure for
conditional execution. The general syntax involves an if
test, followed by zero or more elseif clauses, and finally
an optional else clause:

    if conditional_expression_1
      statements_1
    elseif conditional_expression_2
      statements_2
    elseif conditional_expresiion_3
      statements_3
    ...
    else
      statements_N
    end

Note that a conditional expression is considered true if the
real part of the result of the expression contains all non-
zero elements (this strange convention is adopted for
compatibility with MATLAB).


 Examples

Here is an example of a function that uses an if statement

       if_test.m


  function c = if_test(a)
    if (a == 1)
       c = 'one';
    elseif (a==2)
       c = 'two';
    elseif (a==3)
       c = 'three';
    else
       c = 'something else';
    end

Some examples of if_test in action:

  --> if_test(1)

  ans =
  one
  --> if_test(2)

  ans =
  two
  --> if_test(3)

  ans =
  three
  --> if_test(pi)

  ans =
  something else


* FreeMat_Documentation
* Flow_Control
* Generated on Thu Jul 25 2013 17:17:14 for FreeMat by
  doxygen_ 1.8.1.1

