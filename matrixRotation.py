
matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

m=4
n=4

def matrixRotation(m,n, r):
    # temporary matrix
    mat = []
    k = min(m,n) // 2 #compute no. of layers

    # to get elements from the layer
    for i in range(k):
        temp = []
        for j in range(i, n-1-i):
            temp.append(matrix[i][j])
        for j in range(i, m-1-i):
            temp.append(matrix[j][n-1-i])
        for j in range(n-1-i, i, -1):
            temp.append(matrix[m-1-i][j])
        for j in range(m-1-i, i, -1):
            temp.append(matrix[j][i])
        
        mat.append(temp)
        print(mat)

    # rotate elements and place it in original matrix 
    for i in range(k):
        row = mat[i]
        #find index after rotation
        idx = r %len(row)
        print(len(row))
        def inc():
            return (idx+1) % len(row)

        # assing new rotated alements
        for j in range(i, n-1-i):
            print(f'index:{idx}')
            matrix[i][j] = row[idx]
            idx = inc()
        for j in range(i, m-1-i):
            print(f'index:{idx}')
            matrix[j][n-1-i] = row[idx]
            idx = inc()
        for j in range(n-1-i, i, -1):
            matrix[m-1-i][j] = row[idx]
            idx = inc()
        for j in range(m-1-i, i, -1):
            matrix[j][i] = row[idx]
            idx = inc()

    #print de matrix
    for row in matrix:
        print(*row)


matrixRotation(4,4,2)