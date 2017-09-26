#include <stdio.h>

int main(){
    printf("Hello world\b\b\b\b");
    printf("Hello world\n");


    int i = 40;
    //printf(i);
    //compile: warning
    //running: segmentation fault  ./a.out
    printf("%d and %d \n",i);
    //complile: warning
    //running: print random value

    int x = 100;
    printf("%d, %o, %x \n", x, x, x);
    printf("%#d, %#o, %#x \n", x, x, x);
    //%#d 
    //warning


    //short, long, long long, unsigned, signed
    
    short s = 9;
    printf("%d\n", s);


    //char, signed char,  unsigned char
    char c = 'A';
    printf("%d %c \n", c, c);

    printf("\a \r");
    char ch;
    printf("enter a char:_\b");
    scanf("%c", &ch);
    printf("the char that you input is %c, and the ascii code is %d \n", ch, ch);


    //_Bool
    _Bool b = 1;

    return 0;
}
