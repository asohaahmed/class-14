/*var nam =6;
if (nam % 2 == 0)
document.write("even");

if (nam % 2 !== 0)
document.write("Odd")*/


var reslut = 'enter the percentage of student:';



var a = prompt(reslut);
if(a>85)
    {
      document.write('Grade - A');
    }
else if(a<=85 && a>80)
    {
      document.write('Grade - A-');
    }
else if(a>70 && a<=80)
    {
      document.write('Grade - B');
    }
else if(a>60 && a<=70)
    {
      document.write('Grade - C');
    }
else if(a>40 && a<=60)
    {
      document.write('Grade - D');
    }
else if(a<=40)
{
      if(a<=35)
        {
          document.write('Grade - E Candidate failed');}
      else
        {document.write('Grade - E');}}

