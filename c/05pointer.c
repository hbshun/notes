#include<stdio.h>

int main(void){
    int i = 5, j = 6;
    int * p_i = &i;
    printf("%d \n", i);
    printf("%p %lx\n", p_i,p_i);
    printf("%p \n", &p_i);

    int ** p_p_i = &p_i;
    p_i = &j;
    printf("%d\n",*p_i);
    *p_i = 99;
    printf("%d \n", j);

    //**p_p_i++;
    //p_p_i++);
    (**p_p_i)++;
    printf("%d \n", j);

    return 0;
}
