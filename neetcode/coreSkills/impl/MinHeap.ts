// Operaciones para obtener indice de los nodos vecinos del nodo en el que estamos parados en base a su posición en el array/

// left = i * 2
// right = i * 2 + 1
// parent = Math.trunc(i / 2)

class MinHeap {
    private heap: Array<number | null> = [null];

    private hasParent(idx: number): boolean {
        return this.length() > 1 ? idx >= 2 : false;
    };

    private getParent(idx: number): number | null {
        return this.hasParent(idx) ? Math.trunc(idx / 2) : null;
    }

    public length(): number {
        return this.heap.length;
    };

    public peak(): number | null {
        return this.heap.length > 1 ? this.heap[1] : null;
    };

    public remove(): boolean {
        return true;
    };

    public insert(value: number) {
        this.heap.push(value);

        let currIdx = this.length() - 1;
        let currParent = this.getParent(currIdx);

        while (currParent) {
            if (this.heap[currParent]! < value) break;

            [this.heap[currParent], this.heap[currIdx]] = [this.heap[currIdx], this.heap[currParent]];
            currIdx = currParent
            currParent = this.getParent(currIdx);
        }
    };

    public debugHeap() {
        return this.heap;
    }
}

const heap = new MinHeap();
heap.insert(10);
heap.insert(3);
heap.insert(2);
heap.insert(9);
heap.insert(1);
console.log(heap.debugHeap());