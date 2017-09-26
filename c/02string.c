#include <stdio.h>
#include <string.h>

#define DENSITY 62.4

int main(void){
    printf("What's your name? ");
    char name[40];
    scanf("%s", name); //no &
    printf(name);// warning

    int length = strlen(name);
    printf("length: %d\n", length);

    name[length] = 'a';
    length = strlen(name);
    printf("length: %d\n", length);
    //printf("%d \n", strlen("bangshun")); //waring
    
    for(int i=0;i<40;i++){
        printf("%d: %c %d\n",i ,name[i],name[i]);
        if(name[i]==0){
            break;
            //name[i] = 65;
        }
    }
    length = strlen(name);
    printf("length: %d\n", length);
    name[39] = 'a';
    printf("length: %d\n", sizeof (name));

    printf("%s","bang");   
    return 0;
}
