/**
 * This function deletes the middle node from a singly linked list.
 *
 * Steps:
 * 1. Traverse the entire list to count the number of nodes.
 * 2. If there's only one node, return null as deleting the middle node will result in an empty list.
 * 3. Calculate the index of the middle node using the formula `Math.floor(count / 2)`.
 * 4. Traverse the list again until reaching the node just before the middle node.
 * 5. Modify the `next` pointer of the node just before the middle to skip the middle node, effectively deleting it.
 * 6. Return the modified head of the list.
 */
var deleteMiddle = function (head) {
  var headCopy = head;
  var count = 0;

  // Count the number of nodes in the linked list
  while (headCopy) {
    headCopy = headCopy.next;
    count++;
  }

  // If there's only one node, return null (empty list after deletion)
  if (count === 1) return null;

  var middleIndex = Math.floor(count / 2);
  headCopy = head;
  count = 0; // 0-based index

  // Traverse to the middle node
  while (count < middleIndex - 1) {
    // One node before the middle
    headCopy = headCopy.next;
    count++;
  }

  headCopy.next = headCopy.next.next;

  return head;
};
