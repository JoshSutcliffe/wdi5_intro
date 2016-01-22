require 'minitest/autorun'
require 'minitest/pride'
require './matt.rb'

class MattTest < Minitest::Test

  def setup
    @matt = Matt.new
  end

  def test_asking_question
    # matt = Matt.new
    assert_equal 'sure', @matt.chat('hello?')
  end

  def test_question_mark_not_at_the_end
    # matt = Matt.new
    assert_equal 'sure', @matt.chat('hello?hfhf')
  end

  def test_shouting_with_matt
    # matt = Matt.new
    assert_equal 'chill out', @matt.chat('YO')
  end

  def test_shouting
    # matt = Matt.new
    assert_equal true, @matt.shouting?('YO')
  end

end