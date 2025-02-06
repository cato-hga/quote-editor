require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "name" do
    assert_equal "Accountant", users(:accountant).name
  end
  # TODO - continue turbo streams and security section - Now that we are sure our method displays the correct result, we can update the HTML in our navbar:
end
