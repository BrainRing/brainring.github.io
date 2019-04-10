s1=0;
s2=0;


function plusone1() {
      s1+=1;
      document.getElementById('one').value = s1;
      if (s1>s2) {
        document.getElementById("kone").style.color = "yellow";
        document.getElementById("ktwo").style.color = "#2d5284";
      } if (s2>s1) {
        document.getElementById("kone").style.color = "#2d5284";
        document.getElementById("ktwo").style.color = "yellow";
      }
      if (s1==s2) {
        document.getElementById("kone").style.color = "#2d5284";
        document.getElementById("ktwo").style.color = "#2d5284";
      }
    }
    function plusone2() {
          s2+=1;
          document.getElementById('two').value = s2;
          if (s1>s2) {
            document.getElementById("kone").style.color = "yellow";
            document.getElementById("ktwo").style.color = "#2d5284";
          } if (s2>s1) {
            document.getElementById("kone").style.color = "#2d5284";
            document.getElementById("ktwo").style.color = "yellow";
          }
          if (s1==s2) {
            document.getElementById("kone").style.color = "#2d5284";
            document.getElementById("ktwo").style.color = "#2d5284";
          }
        }
        function minusone1() {
              s1-=1;
              document.getElementById('one').value = s1;
              if (s1>s2) {
                document.getElementById("kone").style.color = "yellow";
                document.getElementById("ktwo").style.color = "#2d5284";
              } if (s2>s1) {
                document.getElementById("kone").style.color = "#2d5284";
                document.getElementById("ktwo").style.color = "yellow";
              }
              if (s1==s2) {
                document.getElementById("kone").style.color = "#2d5284";
                document.getElementById("ktwo").style.color = "#2d5284";
              }
            }
            function minusone2() {
                  s2-=1;
                  document.getElementById('two').value = s2;
                  if (s1>s2) {
                    document.getElementById("kone").style.color = "yellow";
                    document.getElementById("ktwo").style.color = "#2d5284";
                  } if (s2>s1) {
                    document.getElementById("kone").style.color = "#2d5284";
                    document.getElementById("ktwo").style.color = "yellow";
                  }
                  if (s1==s2) {
                    document.getElementById("kone").style.color = "#2d5284";
                    document.getElementById("ktwo").style.color = "#2d5284";
                  }
                }
        