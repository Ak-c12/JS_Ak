def printNum(Lrange, Urange):
    if(Lrange > Urange):
        return
    print(Lrange)
    printNum(Lrange + 1, Urange)

printNum(1, 5)


    


